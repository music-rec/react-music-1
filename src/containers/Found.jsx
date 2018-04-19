import React from 'react'
import { connect } from 'react-redux'
import Swipe from '../components/swipe/Swipe'
import ThumbnailList from '../components/thumbnailList/ThumbnailList'
import { getHomeData } from '../actions/home'
import './found.styl'

class Found extends React.Component {
    componentDidMount() {
        this.props.getHomeData()
    }

    render() {
        let { banners, personalized } = this.props.homeData
        
        return (
            <div>
                <Swipe>
                    {
                        banners && banners.map((banner, index) => (
                            <div className="item" key={index}>
                                <img className="pic" src={banner.pic} alt="" />
                                <span className="theme" style={{ backgroundColor: banner.titleColor }}>{banner.typeTitle}</span>
                            </div>
                        ))
                    }
                </Swipe>
                <div className="recommend-list">
                    <div className="item">
                        <span className="border">
                            <i className="iconfont">&#xe6e8;</i>
                        </span>
                        <div className="text">私人FM</div>
                    </div>
                    <div className="item">
                        <span className="border">
                            <i className="iconfont">&#xe673;</i>
                        </span>
                        <div className="text">开启每日推荐</div>
                    </div>
                    <div className="item">
                        <span className="border">
                            <i className="iconfont">&#xe642;</i>
                        </span>
                        <div className="text">歌单</div>
                    </div>
                    <div className="item">
                        <span className="border">
                            <i className="iconfont">&#xe7bd;</i>
                        </span>
                        <div className="text">排行榜</div>
                    </div>
                </div>
                {
                    personalized && <ThumbnailList title="推荐歌单" list={personalized} showNum={9} />
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    homeData: state.homeData
})

const mapDispatchToProps = {
    getHomeData
}

export default connect(mapStateToProps, mapDispatchToProps)(Found)