var data = {
    questions: [
        {
            text: "何色が好きですか？",
            answers: [
                {
                    text: "赤",
                    target: "ray",
                    value: 1
                },
                {
                    text: "青",
                    target: "rio",
                    value: 1
                },
                {
                    text: "ピンク",
                    target: "unchan",
                    value: 1
                }
            ]
        },
        {
            text: "うんちを漏らしたことはありますか？",
            answers: [
                {
                    text: "はい",
                    target: "ray",
                    value: 2
                },
                {
                    text: "いいえ",
                    target: "none",
                    value: 0
                }
            ]
        },
        {
            text: "好きな食べ物は何ですか？",
            answers: [
                {
                    text: "VRゴーグル",
                    target: "ray",
                    value: 2
                },
                {
                    text: "水",
                    target: "unchan",
                    value: 2
                },
                {
                    text: "マネーーー！！！",
                    target: "rio",
                    value: 2
                },
                {
                    text: "ハンバーガー",
                    target: "none",
                    value: 0
                }
            ]
        },
        {
            text: "墓地にはEXデッキから直接送られた「PSYフレームロード・Ω」が存在します。どうしますか？",
            answers: [
                {
                    text: "死者蘇生を発動",
                    target: "rio",
                    value: 1
                },
                {
                    text: "リビングデットの呼び声を発動",
                    target: "unchan",
                    value: 1
                },
                {
                    text: "カードを売ってマネーにする",
                    target: "rio",
                    value: 2
                },
                {
                    text: "何もせずターンエンド",
                    target: "ray",
                    value: 2
                }
            ]
        }
    ]
};
export default data;
