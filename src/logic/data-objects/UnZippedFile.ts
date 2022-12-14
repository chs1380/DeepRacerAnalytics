interface UnZippedFile {
    buffer: ArrayBuffer;
    name: string;
    size: number;

    readAsString(): string;
}

export default UnZippedFile;
