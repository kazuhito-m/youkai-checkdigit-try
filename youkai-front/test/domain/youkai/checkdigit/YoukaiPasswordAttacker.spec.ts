import YoukaiPasswordAttacker from "@/domain/youkai/checkdigit/YoukaiPasswordAttacker";
import CheckDigitCalculator from "~/domain/youkai/checkdigit/CheckDigitCalculator";
import A31F from "@/domain/youkai/checkdigit/state/A31F";
import Password from "~/domain/youkai/checkdigit/state/Password";
import CodeToCharacterConverter from "@/domain/youkai/checkdigit/converter/CodeToCharacterConverter";

describe('YoukaiPasswordAttacker', () => {
    const sut = new YoukaiPasswordAttacker(new CheckDigitCalculator(), true);

    test('パスワード_KID_を突き止める事が出来る', () => {
        const targetCheckDigit = A31F.createFromHexStrings8("00", "51", "03", "3A", "E9", "08", "23", "07");
        const startPassword = Password.initialize(3);

        const results = sut.execute(targetCheckDigit, startPassword);

        expect(results.length).toEqual(1);
        const actual = results[0].toString();
        expect(actual).toEqual("KID");
    });

    test.skip('パスワード_NAMCO_を突き止める事が出来る', () => {
        const targetCheckDigit = A31F.createFromHexStrings8("3B", "EA", "05", "6C", "D2", "0A", "D8", "08");
        const startPassword = Password.initialize(5);

        const results = sut.execute(targetCheckDigit, startPassword);

        expect(results.length).toEqual(1);
        const actual = results[0].toString();
        expect(actual).toEqual("NAMCO");
    });

    test.skip('パスワード_KAWADA_を突き止める事が出来る', () => {
        const targetCheckDigit = A31F.createFromHexStrings8("54", "34", "06", "3C", "10", "0A", "9F", "08");
        const startPassword = Password.initialize(6);

        const results = sut.execute(targetCheckDigit, startPassword);

        expect(results.length).toEqual(1);
        const actual = results[0].toString();
        expect(actual).toEqual("KAWADA");
    });

    test.skip('パスワード_NAUSICAA_をコンティニュー機能を使って突き止める事が出来る', () => {
        const targetCheckDigit = A31F.createFromHexStrings8("45", "D7", "08", "9F", "AD", "38", "92", "0B");
        const startPassword = new Password([0, 0, 0, 0, 0, 16, 0, 0], new CodeToCharacterConverter());

        const results = sut.execute(targetCheckDigit, startPassword);

        expect(results.length).toEqual(1);
        const actual = results[0].toString();
        expect(actual).toEqual("NAUSICAA");
    });
});
