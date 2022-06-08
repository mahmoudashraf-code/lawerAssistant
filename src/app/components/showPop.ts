export class pop {
    constructor(type: boolean, data: string) {
        let ele: HTMLDivElement;
        ele = document.createElement("div");
        ele.setAttribute("style", `
            position: absolute;
            bottom: 5%;
            background: #009688;
            box-shadow: 0 0 3px black;
            width: 288px;
            left: 10px;
            padding: 13px;
            border-radius: 5px;
            color: white;`);
        if (type == false) ele.style.backgroundColor = "#e91e31"
        ele.innerHTML = data;
        document.body.appendChild(ele);
        setTimeout(() => {
            document.body.removeChild(ele);
        }, 3000);
    }
}