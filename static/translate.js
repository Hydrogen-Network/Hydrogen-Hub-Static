const _0x46c6f7 = _0x2fde;
(function (_0x125335, _0x192241) {
  const _0x4ca9f6 = _0x2fde,
    _0x5ba6be = _0x125335();
  while (!![]) {
    try {
      const _0x586cf4 =
        parseInt(_0x4ca9f6(0xe7)) / 0x1 +
        (-parseInt(_0x4ca9f6(0xf5)) / 0x2) * (parseInt(_0x4ca9f6(0xe9)) / 0x3) +
        parseInt(_0x4ca9f6(0xf4)) / 0x4 +
        (-parseInt(_0x4ca9f6(0xf2)) / 0x5) *
          (-parseInt(_0x4ca9f6(0xe8)) / 0x6) +
        parseInt(_0x4ca9f6(0xeb)) / 0x7 +
        -parseInt(_0x4ca9f6(0xf6)) / 0x8 +
        (-parseInt(_0x4ca9f6(0xee)) / 0x9) * (parseInt(_0x4ca9f6(0xf3)) / 0xa);
      if (_0x586cf4 === _0x192241) break;
      else _0x5ba6be["push"](_0x5ba6be["shift"]());
    } catch (_0x4e83bd) {
      _0x5ba6be["push"](_0x5ba6be["shift"]());
    }
  }
})(_0x2e71, 0x704f8);
const url = _0x46c6f7(0xed),
  options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": _0x46c6f7(0xf0),
      "X-RapidAPI-Host": _0x46c6f7(0xea),
    },
  };
function _0x2e71() {
  const _0x43d48b = [
    "3890mWBIYK",
    "1361468tIUgjV",
    "194IZjCuS",
    "1604480gImaYN",
    "308735entVVe",
    "6DgHKDy",
    "14181JZjbLu",
    "nlp-translation.p.rapidapi.com",
    "5105142FpCYAa",
    "text",
    "https://nlp-translation.p.rapidapi.com/v1/translate?text=Hello%2C%20world!!&to=es&from=en",
    "6057slgvKk",
    "log",
    "c501eb952cmshd07acfed21897b0p115a64jsn7d68efe11152",
    "error",
    "12460fmLQak",
  ];
  _0x2e71 = function () {
    return _0x43d48b;
  };
  return _0x2e71();
}
function _0x2fde(_0x207d34, _0x4d9074) {
  const _0x2e713d = _0x2e71();
  return (
    (_0x2fde = function (_0x2fde0c, _0x49f936) {
      _0x2fde0c = _0x2fde0c - 0xe7;
      let _0x4708b8 = _0x2e713d[_0x2fde0c];
      return _0x4708b8;
    }),
    _0x2fde(_0x207d34, _0x4d9074)
  );
}
try {
  const response = await fetch(url, options),
    result = await response[_0x46c6f7(0xec)]();
  console[_0x46c6f7(0xef)](result);
} catch (_0x1ed058) {
  console[_0x46c6f7(0xf1)](_0x1ed058);
}
