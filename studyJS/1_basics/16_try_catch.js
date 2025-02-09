/**
 * try...catch
 * 
 * 1) 발생시킬때 -> 던진다고 한다. (throw)
 * 2) 명시적으로 인지할때 -> 잡는다고 한다. (catch)
 */
function runner(){
    try{
        console.log('Hello');

        throw new Error('큰 문제가 생겼습니다!');
    
        console.log('HyunWook Kang');
    }catch(e){ //에러가 나면 catch문으로 넘어감
        console.log('---catch---');
        console.log(e);
    }finally{ // 에러 무시하고 시작
        console.log('---finally---');
    }
}
runner();