function StatisticsItem({img, title, total, increase}) {
    return(
        <>
        <div className='main-item'>
            <div className='main-item-disc'>
                <div className='main-item-disc-icon-wrap'>
                    <img src={img} alt={title} className='main-item-disc-icon'/>
                </div>
                <div className='main-item-disc-title'>{title}</div>
            </div>
            <div className='main-item-amount'>{total} {increase}</div>
        </div>
        </>
    )
}

export default StatisticsItem;