// newsDtFirstChild と width の定義は共通
const newsDtFirstChild = document.querySelector('#news dt:first-child');

// 表示を更新する関数
function updateWidthDisplay() {
    // クライアント幅を取得
    const width = newsDtFirstChild.clientWidth;

    // 小数点以下5桁で表示
    const fixedWidth = width;

    // テキストコンテンツを更新
    newsDtFirstChild.textContent = `${fixedWidth}px`;
    console.log(`更新されたDTの幅: ${fixedWidth}px`);
}

// ページ読み込み時に一度実行して初期表示
updateWidthDisplay();

/*
// newsDtFirstChild と width の定義は共通
const newsDtFirstChild2 = document.querySelector('#contact dt:first-child');

// 表示を更新する関数
function updateWidthDisplay2() {
    // クライアント幅を取得
    const width2 = newsDtFirstChild2.clientWidth;

    // 小数点以下5桁で表示
    const fixedWidth2 = width2;

    // テキストコンテンツを更新
    newsDtFirstChild2.textContent = `${fixedWidth2}px`;
    console.log(`更新されたDTの幅: ${fixedWidth2}px`);
}

// ページ読み込み時に一度実行して初期表示
updateWidthDisplay2();
*/

// newsDtFirstChild と width の定義は共通
const newsDtFirstChild100 = document.querySelector('#news dt:last-of-type');

// 表示を更新する関数
function updateWidthDisplay100() {
    // クライアント幅を取得
    const width100 = window.innerWidth;

    // 小数点以下5桁で表示
    const fixedWidth100 = width100;

    // テキストコンテンツを更新
    newsDtFirstChild100.textContent = `${fixedWidth100}px`;
    console.log(`更新されたDTの幅: ${fixedWidth100}px`);
}

// ページ読み込み時に一度実行して初期表示
updateWidthDisplay100();

window.addEventListener('resize', updateWidthDisplay);
// window.addEventListener('resize', updateWidthDisplay2);
window.addEventListener('resize', updateWidthDisplay100);


