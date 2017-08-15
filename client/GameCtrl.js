(function() {
    var CARD_TYPE = {
        TIAO  : 0,    //条
        BING  : 1,    //饼
        WAN   : 2,    //万

        JIANG : 3,    //老蒋
        XI    : 4     //喜牌
    };

    var CARDS = [
        //条
        1,  2,  3,  4,  5,  6,  7,  8,  9,
        1,  2,  3,  4,  5,  6,  7,  8,  9,
        1,  2,  3,  4,  5,  6,  7,  8,  9,
        1,  2,  3,  4,  5,  6,  7,  8,  9,

        //饼
        11, 12, 13, 14, 15, 16, 17, 18, 19,
        11, 12, 13, 14, 15, 16, 17, 18, 19,
        11, 12, 13, 14, 15, 16, 17, 18, 19,
        11, 12, 13, 14, 15, 16, 17, 18, 19,

        //万
        21, 22, 23, 24, 25, 26, 27, 28, 29,
        21, 22, 23, 24, 25, 26, 27, 28, 29,
        21, 22, 23, 24, 25, 26, 27, 28, 29,
        21, 22, 23, 24, 25, 26, 27, 28, 29,

        //老蒋
        31, 32, 33,
        31, 32, 33,
        31, 32, 33,
        31, 32, 33,

        //喜牌
        41, 42, 43, 44, 45
    ];


    var gameCtrl = {};

    //洗牌
    gameCtrl.initCards = function(bXI) {
        var cards    = null;
        var randTime = 0
        var idx1     = 0;
        var idx2     = 0;
        var tmp      = 0;

        //带喜15张，不带喜120张
        cards = CARDS.slice(0, bXI? CARDS.length: CARDS.length - 5);

        randTime = Math.floor(cards.length / 2); //随机次数
        for (; randTime >= 0; --randTime) {
            idx1 = Math.floor(Math.random() * cards.length);
            idx2 = Math.floor(Math.random() * cards.length);
        
            tmp = cards[idx1];
            cards[idx1] = cards[idx2];
            cards[idx2] = tmp;
        }
        console.log(cards.length + "\n" + cards);
        return cards;
    };

    //是否胡牌
    gameCtrl.isHu = function(cards, card) {

    };




    module.exports = gameCtrl;
})();