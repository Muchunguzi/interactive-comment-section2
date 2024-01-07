
import { VoteSectionMobile} from "./VoteSectionMobile";
import { ReplyPartMobile } from './ReplyPartMobile';

const MobilePart = ({openReply}) => {
    return (
        <div className="mobiles">
     
          
             <div className="voteSection_mobile_part">
             <VoteSectionMobile />
             </div>

             <span className="voteSection_mobile_part"></span>
             
             <div className="voteSection_mobile_part">

            <ReplyPartMobile openReply={openReply} />

             </div>
        
         
        </div>
    )
}

export {MobilePart};