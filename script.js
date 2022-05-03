window.addEventListener("load",fun,false);
function fun()
{
    document.getElementById("inf").addEventListener("mouseover",f1,false);
    document.getElementById("inf").addEventListener("mouseout",f2,false);
    
}
function f1()
{
    c2="<h2>Our School Is The 2nd Top Most School In Erode District.We have more Than 65 Teaching Staffs</h2>";
    document.getElementById("inf").innerHTML=c2;
}
function f2()
{
    c1="<h2>HIGH CLASS INFRASTRUCTURE</h2>";
    document.getElementById("inf").innerHTML=c1;
}
window.addEventListener("load",rig,false);
function rig()
{
    document.getElementById("righ").addEventListener("mouseover",r1,false);
    document.getElementById("righ").addEventListener("mouseout",r2,false);
}
function r1()
{
    b1="<h5>This Name is Owned By Us By Government Ceritification</h5>";
    document.getElementById("righ").innerHTML=b1;
}
function r2()
{
    b2="<h5>ALL RIGHTS RESERVED <sup>TM</sup> SUBA SCHOOL</h5>"
    document.getElementById("righ").innerHTML=b2;
}
window.addEventListener("load",sub,false);
function 

