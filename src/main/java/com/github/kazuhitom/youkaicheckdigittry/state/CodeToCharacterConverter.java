package com.github.kazuhitom.youkaicheckdigittry.state;

/**
 * 文字コード変換テーブル。
 */
public class CodeToCharacterConverter {
    private static final char[] A_TO_Y = "AHOV16**BIPW27**CJQX38**DKRY49**ELSZ50**FMT-n!**GNU.mc".toCharArray();

    public char convert(int code) {
        return A_TO_Y[code];
    }
}
