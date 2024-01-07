import {Comment} from './Comment'
import { VoteSection } from './VoteSection';
import { FaReply } from 'react-icons/fa';
import amyroImg from '../assets/images/image-amyrobson.png'
import { ReplyForm2 } from './ReplyForm2';
import { ReplyList2 } from './ReplyList2';
import { useState } from 'react';
import { MobilePart } from './MobilePart';

const ArmyroComment = () => {
    const [replys, setReply] = useState([]);
    
    const openReply = () => {
        document.getElementById('replyForm2').style.display='initial';
    }

    const addReply = (reply) => {
        setReply([
            ...replys,{
                ...reply,
                id: Date.now(),
            }
        ]);
    }

    return(

      <>
       
       <div className="comment">
      <VoteSection className="voteSection_desktop" />
      
      <div className='middle_comment_part'>


          <div className='comment_upper_part'>
          <img className='Dp' src={amyroImg} alt='' />
          <h5 className='userName'>amyrobson</h5>
          
          <p>1 month ago</p>
          
          </div>
         
          <p>Impressive! Though it seems the drag feature could be improved. But overall it<br />
          looks incredible. You've nailed the design and the responsiveness at various <br />
          breakpoints works really well.</p>

           

          <MobilePart openReply={openReply} />     
          

      </div>
       
      
      
      
      
      <div className='reply_area' onClick={openReply}>
      <FaReply className='reply_area' style={{color: 'blue'}} />
      <button className='reply reply_area'>Reply</button>
      </div>
      
      
     </div>

     <ReplyForm2 addReply={addReply} />
     <ReplyList2 replys = {replys} />

      </>
      
    );
}

export {ArmyroComment};