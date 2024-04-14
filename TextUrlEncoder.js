class TextUrlEncoder {
    static urlEncode(text, compressBeforeEncoding = false) {
        if (compressBeforeEncoding) {
            text = TextUrlEncoder.compress(text);
        }
        return encodeURIComponent(text);
    }

    static urlDecode(text, wasCompressed = false) {
        let decodedText = decodeURIComponent(text);
        if (wasCompressed) {
            decodedText = TextUrlEncoder.decompress(decodedText);
        }
        return decodedText;
    }
}
