const fourLetterWords = ["例え1", "例え2", "例え3", ...]; // 千個の四文字列をここにリストとして追加

function searchString() {
    const input = document.getElementById('searchInput').value;
    const resultElem = document.getElementById('result');

    if (fourLetterWords.includes(input)) {
        resultElem.textContent = "一致するデータがあります!";
    } else {
        resultElem.textContent = "一致するデータがありません。";
    }
}
