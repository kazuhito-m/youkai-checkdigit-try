package com.github.kazuhitom.youkai.server.application.service;

import com.github.kazuhitom.youkai.core.domain.model.checkdigit.A31F;
import com.github.kazuhitom.youkai.core.domain.model.checkdigit.CheckDigitCalculator;
import com.github.kazuhitom.youkai.core.domain.model.password.Password;
import com.github.kazuhitom.youkai.core.domain.model.password.converter.CodeToCharacterConverter;
import com.github.kazuhitom.youkai.server.domain.model.foundpassword.FoundPasswordRepository;
import com.github.kazuhitom.youkai.server.domain.model.foundpassword.FoundPasswordSearchCondition;
import com.github.kazuhitom.youkai.server.domain.model.foundpassword.FoundPasswords;
import org.springframework.stereotype.Service;

@Service
public class FoundPasswordService {
    private final FoundPasswordRepository repository;

    private final CodeToCharacterConverter converter = new CodeToCharacterConverter();
    private final CheckDigitCalculator calculator = new CheckDigitCalculator();

    public FoundPasswords findOf(FoundPasswordSearchCondition condition) {
        return repository.findOf(condition);
    }

    public boolean isInvalidPassword14(String passwordOf14) {
        A31F targetCD = calculator.calculate(Password.withText(passwordOf14));
        A31F correctCD = calculator.calculate(Password.withText("534-030.565.81"));
        return !correctCD.equals(targetCD);
    }

    public boolean isInvalidPasswordQuery(String queryText) {
        return converter.isInvalidPassword(queryText);
    }

    public FoundPasswordService(FoundPasswordRepository repository) {
        this.repository = repository;
    }
}
