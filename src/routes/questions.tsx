import { useParams } from "react-router";
import QuestionPage from "./questionPage";


function Questions(){
    const pm = useParams();
    const pmid = pm.id;
    if(Number(pmid)<5 && 0<=Number(pmid)){
        return <QuestionPage questionsID ={pmid}/>
    }else{
        return <div>[ERROR]Questions ID {pm.id}は存在しません。適切なIDを入力してください。</div>
    }
    
}

export default Questions;