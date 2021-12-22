package com.github.kazuhitom.youkaicheckdigittry;

import org.junit.jupiter.api.Test;

import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;

import static org.junit.jupiter.api.Assertions.assertEquals;

class YoukaiTest02_01Test {
//    @Test
//    public void とりあえず動かせる() {
//        YoukaiTest02_01.main(new String[]{"KID"});
//    }

    private String calc(String password) {
        var sut = new YoukaiTest02_01();
        return sut.execute(password);
    }

    @Test
    public void 単体でチェックディジットをチェックできる() {
        assertEquals("ED 26 08 EE 3D 23 1D 12", calc("SPEED-UP"));
        assertEquals("5F 65 0C 8F 8B 22 76 13", calc("OHAYOUKAWADA"));
        assertEquals("9A 7D 09 9E B5 09 55 0C", calc("UDADAGAWA"));
        assertEquals("4A 89 0A 1F F5 28 7B 1C", calc("S.62.08.22"));
        assertEquals("86 C4 09 6B 32 22 E6 0E", calc("KOBAYASHI"));
        assertEquals("54 34 06 3C 10 0A 9F 08", calc("KAWADA"));
        assertEquals("63 B6 09 20 B4 08 EA 13", calc("PC-ENGINE"));
        assertEquals("46 60 03 61 EC 01 2D 05", calc("NEC"));
        assertEquals("70 74 06 BB D6 02 4E 0F", calc("MIZUNO"));
        assertEquals("3E 19 04 5C 5B 28 76 0C", calc("6809"));
        assertEquals("F9 41 07 AC E5 21 83 10", calc("MONITOR"));
        assertEquals("44 3D 09 9A 57 32 71 0F", calc("YAMASHITA"));
        assertEquals("63 95 07 6A B1 21 44 0E", calc("MICHIYO"));
        assertEquals("01 F7 04 54 94 22 E5 08", calc("YAGI"));
        assertEquals("08 3A 08 94 CB 2A 78 13", calc("YUKIHIKO"));
        assertEquals("4B 70 05 4D 96 3B 36 09", calc("KOMAI"));
        assertEquals("D4 77 08 94 CD 1B 6A 10", calc("KAZUHIKO"));
        assertEquals("FA 68 08 8A 3A 1F 8D 12", calc("756-2311"));
        assertEquals("3B EA 05 6C D2 0A D8 08", calc("NAMCO"));
        assertEquals("1C 6F 06 96 41 20 16 0C", calc("NAMCOT"));
        assertEquals("F2 4A 09 0A A2 12 76 10", calc("NAGAMATSU"));
        assertEquals("43 4C 05 3C 35 0A 93 08", calc("AKIRA"));
        assertEquals("45 D7 08 9F AD 38 92 0B", calc("NAUSICAA"));
        assertEquals("04 49 06 87 39 33 C4 0A", calc("LAPUTA"));
        assertEquals("29 62 05 89 BD 35 64 0E", calc("68000"));
        assertEquals("F8 7D 04 5B 4B 08 A9 09", calc("6502"));
        assertEquals("00 08 03 22 88 20 22 03", calc("HAL"));
        assertEquals("00 51 03 3A E9 08 23 07", calc("KID"));
        assertEquals("5D 50 0C FD B4 13 63 17", calc("KUMI.HANAOKA"));
        assertEquals("04 76 10 32 D1 21 27 1B", calc("HARUHISA.UDAGAWA"));

        // 今回見つかった三種

        assertEquals("64 98 0B 15 91 18 B1 15", calc("HENTAIOSUGI"));
        assertEquals("DC D9 08 A3 E3 17 28 15", calc("818-6104"));
        assertEquals("65 94 0E AC E9 07 33 25", calc("534-030.565.81"));
        assertEquals("65 94 0E AC E9 07 33 25", calc("009n251.mn3202"));
    }

    //    @Disabled("非テストなので")
    @Test
    public void 旧ロジックでテストデータファイルを大量に作る() throws IOException {
        final var RECORD_COUNT = 100000;
        // 3〜14文字で、規定件数のパスワードと計算後のチェック・ディジットのTSVデータを作成。
        var tsvStream = YoukaiTest02_01.generateRandomPasswords(3, 14, RECORD_COUNT)
                .stream()
                .map(password -> String.format("%s\t%s", calc(password), password));

        try (var os = new FileWriter("./passAndCheckDigits.tsv");
             var bos = new BufferedWriter(os)) {
            tsvStream.forEach(i -> {
                try {
                    bos.write(i);
                    bos.newLine();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            });
        }
    }
}