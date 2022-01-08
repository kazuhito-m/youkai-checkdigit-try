-- カテゴリ違いでの重複チェック
SELECT COUNT(*) FROM (
    SELECT
        word,
        word_cnt
    FROM (
        SELECT COUNT(word) AS word_cnt, word
        FROM word_dictionary
        GROUP BY word
    ) AS word_dictionary_counts
    WHERE
        word_cnt > 1
) AS all_word;

-- 削除のための確認抽出
SELECT
    id,
    word,
    category
FROM
    word_dictionary
WHERE
    word IN
    (
        SELECT
            word
        FROM (
                SELECT COUNT(word) AS word_cnt, word
                FROM word_dictionary
                GROUP BY word
            ) AS word_dictionary_counts
        WHERE
            word_cnt > 1
    )
ORDER BY
    word
;

-- 人名と人名と一般名詞が多そうなので、削除する
DELETE FROM
    word_dictionary
WHERE
    category = '人名'
    AND word IN
    (
        SELECT
            word
        FROM (
                SELECT COUNT(word) AS word_cnt, word
                FROM word_dictionary
                GROUP BY word
            ) AS word_dictionary_counts
        WHERE
            word_cnt > 1
    )
;

DELETE FROM
    word_dictionary
WHERE
    category = '名詞'
    AND word IN
    (
        SELECT
            word
        FROM (
                SELECT COUNT(word) AS word_cnt, word
                FROM word_dictionary
                GROUP BY word
            ) AS word_dictionary_counts
        WHERE
            word_cnt > 1
    )
;

DELETE FROM
    word_dictionary
WHERE
    category = '一般名詞'
    AND word IN
    (
        SELECT
            word
        FROM (
                SELECT COUNT(word) AS word_cnt, word
                FROM word_dictionary
                GROUP BY word
            ) AS word_dictionary_counts
        WHERE
            word_cnt > 1
    )
;

DELETE FROM
    word_dictionary
WHERE
    category = '英語'
    AND word IN
    (
        SELECT
            word
        FROM (
                SELECT COUNT(word) AS word_cnt, word
                FROM word_dictionary
                GROUP BY word
            ) AS word_dictionary_counts
        WHERE
            word_cnt > 1
    )
;

DELETE FROM
    word_dictionary
WHERE
    category = '動詞'
    AND word IN
    (
        SELECT
            word
        FROM (
                SELECT COUNT(word) AS word_cnt, word
                FROM word_dictionary
                GROUP BY word
            ) AS word_dictionary_counts
        WHERE
            word_cnt > 1
    )
;

DELETE FROM
    word_dictionary
WHERE
    category LIKE '接尾辞%'
    AND word IN
    (
        SELECT
            word
        FROM (
                SELECT COUNT(word) AS word_cnt, word
                FROM word_dictionary
                GROUP BY word
            ) AS word_dictionary_counts
        WHERE
            word_cnt > 1
    )
;

DELETE FROM
    word_dictionary
WHERE
    category = '副詞'
    AND word IN
    (
        SELECT
            word
        FROM (
                SELECT COUNT(word) AS word_cnt, word
                FROM word_dictionary
                GROUP BY word
            ) AS word_dictionary_counts
        WHERE
            word_cnt > 1
    )
;

DELETE FROM
    word_dictionary
WHERE
    category LIKE '感動詞%'
    AND word IN
    (
        SELECT
            word
        FROM (
                SELECT COUNT(word) AS word_cnt, word
                FROM word_dictionary
                GROUP BY word
            ) AS word_dictionary_counts
        WHERE
            word_cnt > 1
    )
;

-- 逆引きして「引っかかららないデータ」を削除する
SELECT
    COUNT(word_dictionary.id)
FROM
    found_password INNER JOIN word_dictionary
    ON (found_password.password NOT LIKE '%' || word_dictionary.word || '%')
WHERE
    CHAR_LENGTH(word) > 2
;


DELETE FROM word_dictionary
WHERE id IN (
    SELECT
        word_dictionary.id
    FROM
        found_password INNER JOIN word_dictionary
        ON (found_password.password NOT LIKE '%' || word_dictionary.word || '%')
    WHERE
        CHAR_LENGTH(word) > 2
)
;

-- 試しに「繋がってるやつ」だけをテンプテーブルにとって見る
CREATE TABLE temp_used_word (
    id INTEGER
);

INSERT INTO temp_used_word (id)
SELECT
    big_words.id
FROM (
    SELECT
        id,
        word
    FROM
        word_dictionary
    WHERE
        CHAR_LENGTH(word) >= 4
) AS big_words
INNER JOIN found_password
ON (found_password.password LIKE '%' || big_words.word || '%')
;
