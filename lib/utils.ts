"use strict";
export const excludeSpecial: Function = (str: string) => {
    // 去掉转义字符
    str = str.replace(/[\'\"\\\/\b\f\n\r\t]/g, "");
    // 去掉特殊字符
    str = str.replace(/[\@\#\$\%\^\&\*\{\}\:\"\L\<\>\?]/g, "");
    return str;
};

export function getFormattedDate(dateString: string): string {
    return new Intl.DateTimeFormat("zh-CN", { dateStyle: "full" }).format(
        new Date(dateString)
    );
}

export function genDate() {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    const timezoneOffset = date.getTimezoneOffset();
    const timezoneOffsetHours = Math.floor(Math.abs(timezoneOffset) / 60)
        .toString()
        .padStart(2, "0");
    const timezoneOffsetMinutes = (Math.abs(timezoneOffset) % 60)
        .toString()
        .padStart(2, "0");
    const timezoneSign = timezoneOffset >= 0 ? "-" : "+";
    // const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][
    //     date.getDay()
    // ];

    const formattedDate = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
    const formattedTimezone = `${timezoneSign}${timezoneOffsetHours}:${timezoneOffsetMinutes}`;

    return `${formattedDate}${formattedTimezone}`;
}

// 将数组按指定大小分块
export function chunk(arr: any[] = [], size = 1) {
    if (arr.length === 0) return [];
    return arr.reduce(
        (total, currentValue) => {
            if (total[total.length - 1].length === size) {
                total.push([currentValue]);
            } else {
                total[total.length - 1].push(currentValue);
            }
            return total;
        },
        [[]]
    );
}

export function decodeUtf8(bytes:any) {
    var encoded = "";
    for (var i = 0; i < bytes.length; i++) {
        encoded += "%" + bytes[i].toString(16);
    }
    return decodeURIComponent(encoded);
}