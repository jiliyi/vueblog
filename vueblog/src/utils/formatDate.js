export default function(timestamp){
    let time = new Date(+timestamp);
    const month = (time.getMonth()+1).toString().padStart(2,'0');
    const day = (time.getDate()+1).toString().padStart(2,'0');
    return `${time.getFullYear()}年-${month}月-${day}日`;
}