package com.github.kazuhitom.youkai.core.domain.model.attack;

import com.github.kazuhitom.youkai.core.domain.model.checkdigit.A31F;
import com.github.kazuhitom.youkai.core.domain.model.checkdigit.CheckDigitCalculator;
import com.github.kazuhitom.youkai.core.domain.model.password.Password;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

@Disabled
class YoukaiPasswordAttackerTest {
    private final YoukaiPasswordAttacker sut = new YoukaiPasswordAttacker(new CheckDigitCalculator(), true);

    @Test
    public void パスワード_KID_を突き止める事が出来る() {
        var targetCheckDigit = A31F.createFromHexStrings8("00", "51", "03", "3A", "E9", "08", "23", "07");
        var startPassword = Password.initialize(3);

        var results = sut.execute(targetCheckDigit, startPassword);

        assertEquals(1, results.size());
        var actual = results.get(0).toString();
        assertEquals("KID", actual);
    }

    @Test
    public void パスワード_NAMCO_を突き止める事が出来る() {
        var targetCheckDigit = A31F.createFromHexStrings8("3B", "EA", "05", "6C", "D2", "0A", "D8", "08");
        var startPassword = Password.initialize(5);

        var results = sut.execute(targetCheckDigit, startPassword);

        assertEquals(1, results.size());
        var actual = results.get(0).toString();
        assertEquals("NAMCO", actual);
    }

    @Test
    public void パスワード_KAWADA_を突き止める事が出来る() {
        var targetCheckDigit = A31F.createFromHexStrings8("54", "34", "06", "3C", "10", "0A", "9F", "08");
        var startPassword = Password.initialize(6);

        var results = sut.execute(targetCheckDigit, startPassword);

        assertEquals(1, results.size());
        var actual = results.get(0).toString();
        assertEquals("KAWADA", actual);
    }

    @Test
    public void パスワード_NAUSICAA_をコンティニュー機能を使って突き止める事が出来る() {
        var targetCheckDigit = A31F.createFromHexStrings8("45", "D7", "08", "9F", "AD", "38", "92", "0B");
        var startPassword = new Password(0, 0, 0, 0, 0, 16, 0, 0);

        var results = sut.execute(targetCheckDigit, startPassword);

        assertEquals(1, results.size());
        var actual = results.get(0).toString();
        assertEquals("NAUSICAA", actual);
    }
}