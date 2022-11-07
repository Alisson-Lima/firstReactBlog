export function Posts({subtitle, title, children}){
    return(
        <div className="post mx-2">
            <div className="img-post"></div>
            <h5>{subtitle}</h5>
            <h3>{title}</h3>
            <p>{children}</p>
            <div className="flex pt-2">
                <div className="img-profile">
                    <img src="" alt="" />
                </div>
                <div className="description-profile ml-2">
                    <h6 className="color-blue">Fulano de tal</h6>
                    <p>Aug 2, 2022 - 8 min read</p>
                </div>
            </div>
        </div >
    )
}