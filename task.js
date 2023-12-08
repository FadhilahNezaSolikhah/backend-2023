// Producing promise
const download = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Download selesai")
        }, 3000);
    })
}

const showDownload = () => {
    const result = "windows-10.exe"
    return new Promise((resolve) => {
        resolve(`Hasil Download : ${result}`)
    });
}

const main = async () => {
    console.log(await download());
    console.log(await showDownload());
}

main();
