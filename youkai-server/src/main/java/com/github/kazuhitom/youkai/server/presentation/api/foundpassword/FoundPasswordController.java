package com.github.kazuhitom.youkai.server.presentation.api.foundpassword;

import com.github.kazuhitom.youkai.core.domain.model.password.Password;
import com.github.kazuhitom.youkai.core.domain.model.password.converter.CodeToCharacterConverter;
import com.github.kazuhitom.youkai.server.application.service.FoundPasswordService;
import com.github.kazuhitom.youkai.server.domain.model.exception.InvalidParameterException;
import com.github.kazuhitom.youkai.server.domain.model.foundpassword.FoundPasswordSearchCondition;
import com.github.kazuhitom.youkai.server.domain.model.foundpassword.FoundPasswords;
import com.github.kazuhitom.youkai.server.presentation.api.foundpassword.response.FoundPasswordsResponse;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequestMapping("/api/foundpassword")
public class FoundPasswordController {
    private final FoundPasswordService service;

    private final CodeToCharacterConverter converter = new CodeToCharacterConverter();

    @GetMapping
    public FoundPasswordsResponse find(
            @RequestParam("query") String query,
            @RequestParam("offset") int offset,
            @RequestParam("limit") int limit,
            @RequestParam("reverse") Optional<Boolean> reverse
    ) {
        String error = validation(query, limit);
        if (error.length() > 0) throw new InvalidParameterException(error);

        FoundPasswordSearchCondition condition = FoundPasswordSearchCondition.of(query, offset, limit, reverse);
        FoundPasswords passwords = service.findOf(condition);
        return FoundPasswordsResponse.of(passwords);
    }

    private String validation(String query, int limit) {
        if (limit > 1000) return "offsetの設定値が大きすぎます。";
        String trimmed = query.trim();
        if (trimmed.length() < 2) return "query文字列が短すぎます。";
        if (trimmed.length() > Password.MAX_CHARS_LENGTH) return "query文字列が長すぎます。";
        if (converter.isInvalidPassword(query)) return "query文字列にパスワードに使えない文字が使われています。";
        return "";
    }

    public FoundPasswordController(FoundPasswordService service) {
        this.service = service;
    }
}
