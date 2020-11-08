let demo = document.querySelector("#demo");
let style = document.querySelector("#style");
let n = 0;
let string = `
/* 你好，我是凉风
 *  现在秀一下前端功底
 *  首先我准备一个div1
 */
#div1{
    border: 1px solid red;
    width :400px;
    height: 400px;
}
/*为了美观，我们把他移动到右边吧*/
#div1{
    position:fixed;
    top: 20px;
    right: 20px;
}
/*接下来我把div1变成一个八卦图
 *首先，把div1变成一个圆
 */
#div1{
    border-radius: 50%;
    box-shadow: 0 0 4px rgba(0,0,0,0.6);
    border:none;
}
/*把它对半分成一黑一白
*/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, 
    rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*把黑白鱼头加上*/
#div1::before{
    content: '';
    display:block;
    position: absolute;
    top: 0;
    left: 50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, 
    rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
    transform: translateX(-50%);
    width: 200px;
    height: 200px;
    border-radius: 50%;
}
#div1::after{
    content: '';
    display:block;
    width: 200px;
    height: 200px;
    position: absolute;
    bottom: 0;
    left: 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%,
    rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
    transform: translateX(-50%);
    border-radius: 50%;
}
/*接下来让他转起来*/
@keyframes x{
    from{
        transform: rotate(0deg);
    }
    to{
        transform: rotate(360deg);
    }
}
#div1{
    animation: x 2s infinite linear;
}
/*大功告成！手机的细节没有展示也可以适应哦！*/
`
;
string2 = '';//储存处于当前递归的整个字符串
let step = () => {
    setTimeout(() => {
        if (string[n]==="\n") { //将回车改为html中的换行<br>
            string2 += '<br>'
        }
        else if (string[n]===' ') {
            string2+='&nbsp;';
        }
        else {
            string2 += string[n];
        }
        demo.innerHTML = string2;
        window.scrollTo(0, 9999);
        demo.scrollTo(0,9999);
        style.innerHTML = string.substring(0,n+1);
        n += 1;
        if(n < string.length){
        step();
        }
    },0)
}

step();