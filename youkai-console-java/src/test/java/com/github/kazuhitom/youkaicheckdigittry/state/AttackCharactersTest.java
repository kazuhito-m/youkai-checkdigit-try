package com.github.kazuhitom.youkaicheckdigittry.state;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class AttackCharactersTest {
    @Test
    public void 文字列の初期化時に_有効な文字コード中で一番低い値_で初期化される() {
        var charTable = "****16******27******38******49******50*****-*******.**";
        var converter = new CodeToCharacterConverter(charTable);

        var actual = AttackCharacters.Initialize(4, converter);

        assertEquals("04 04 04 04", actual.dumpHexText());
    }
}