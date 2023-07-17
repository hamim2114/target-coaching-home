import { Link } from 'react-router-dom';
import './SingleNoticePage.scss';
import { MdOutlineAccessTimeFilled } from 'react-icons/md'
import { BsArrowLeft } from 'react-icons/bs'

const SingleNoticePage = () => {
  return (
    <div className="notice-single-page">
      <div className="notice-single-page-wrapper">
        <div className='top-title'>Notice For CLASS: SIX</div>
        <div className="notice-img">
          <img src='/notice.png' alt="" />
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. <hr /></h1>
        <div className='info'>
          <div className="time"><MdOutlineAccessTimeFilled /> 12/02/2023</div>
        </div>
        <div className="text">
          <p>Double dipping in spousal support can be a big consideration for individuals navigating divorce or separation in British Columbia. In some cases, courts may tell people not to “double dip” but in others, they have said that double dipping is acceptable. Take a read below to find out what double dipping is in the family law context, and whether this is something you should be aware of in your family law dispute.</p><p><br /></p><h2>What is double dipping in spousal support?</h2><p>Double dipping refers to the potential for one party to receive multiple financial benefits from the same income source, resulting in unfair outcomes. For example think of a couple who have divided their property upon the breakdown of their marriage. In this example one spouse would claim continued support based on the income generated from the previously divided assets (think a pension) of the other spouse. Generally, it is considered unfair to allow the claiming spouse to reap the benefit of both the asset upon property division as well as a source of income.</p><p><br /></p><h2>What do the courts say about double dipping in spousal support?</h2><p>The leading case on the issue of double dipping in spousal support is the Supreme Court of Canada (SCC) case Boston v. Boston (2001 SCC 43). In this case, the husband’s pension was worth over $300,000. The parties entered into a separation agreement that allowed him to keep this pension and a few personal belongings, while the wife kept the family home, farm, cottage and most of the savings. The agreement also set out the husband’s spousal support obligation to the wife.&nbsp;</p><p><br /></p><p>agreement also set out the husband’s spousal support obligation to the wife. Three years after the separation agreement, the husband retired, and most of his income came from his pension. He applied to have his spousal support payments reduced because of his reduced income. He argued that he should not have to pay spousal support based on his pension income, as the pension was already considered when the parties divided their marital property. The wife argued that she was still entitled to spousal support, as she had grown used to a standard of living based on her spousal support payments and would not be able to find&nbsp;</p><p><br /></p><p>employment now after being a traditional homemaker her entire life. The SCC held that there should be no double dipping, stating that “it is generally unfair to allow the [recipient] spouse to reap the benefit of the pension both as an asset and then again as a source of income.” The Court also stated that the wife had an obligation to use the assets she had acquired through the division of property to generate a stream of income for her own support. The British Columbia Court of Appeal (BCCA) cited Boston when considering the issue of double dipping in Puiu v. Pui (2011 BCCA 480). The parties previously divided their assets by consent,</p><p><br /></p><p>v. Pui (2011 BCCA 480). The parties previously divided their assets by consent, including pension funds. The lower Court decided that there should be no continuation of spousal support payable, which the wife appealed. The BCCA upheld the lower Court’s decision, recognizing that the husband was 66 years old and unable to find a new job, and he was reliant on his pension and savings. The BCCA held that the wife had received her share of family assets, and to allow her now to seek a share of the income from the husband’s assets would be to allow the form of “double dipping” that was found to be improper in Boston. This would essentially result in re-dividing assets that had already been divided.</p>
        </div>
        <Link to='/notice' className='back-arrow'><BsArrowLeft />Back to Notice</Link>
      </div>
    </div>
  )
}

export default SingleNoticePage