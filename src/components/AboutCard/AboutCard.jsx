import './aboutCard.scss';

function AboutCard({title, desc}){
    return(
        <div className="about-card">
            <p className='title'>{title}</p>
            <p className='desc'>{desc}</p>
        </div>
    )
}

export default AboutCard;