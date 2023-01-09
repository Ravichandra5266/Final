import {Component} from 'react'

import {AiOutlineCloseCircle} from 'react-icons/ai'

import {BsSearch} from 'react-icons/bs'

import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'

import ContextMessage from '../../context/ContextMessage'

import Header from '../Header'

import Sidebar from '../Sidebar'

import VideoDetails from '../VideoDetails'

import {
  HomePageContainer,
  BannerSectionContainer,
  BannerSectionLogo,
  CloseIcon,
  FlexContainer,
  BannerDescription,
  BannerSectionBtn,
  HomeContentContainer,
  SearchBarContainer,
  SearchInput,
  SearchIconContainer,
  SpinnerContainer,
  VideosDetailsListContainer,
  FailureViewContainer,
  FailureImg,
  FailureTitle,
  FailureDescription,
  FailureRetryBtn,
  EmptySearchContainer,
  EmptySearchImg,
  EmptySearchTitle,
  EmptySearchDescription,
  EmptySearchRetryBtn,
  SearchBtn,
} from './styledComponents'

import './index.css'

const ApiStatusConstant = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'INPROGRESS',
}

class Home extends Component {
  state = {
    isBannerClosed: false,
    initialSearchValue: '',
    initialVideosDataList: [],
    urlStatus: ApiStatusConstant.initial,
  }

  componentDidMount() {
    this.getHomeVideosApiUrl()
  }

  onClickCloseBanner = () => {
    this.setState({isBannerClosed: true})
  }

  onChangeSearchValue = event => {
    this.setState({initialSearchValue: event.target.value})
  }

  onClickSearch = () => {
    this.setState({}, this.getHomeVideosApiUrl)
  }

  getUpdatedData = data => {
    const modifiedData = data.videos.map(each => ({
      id: each.id,
      publishedAt: each.published_at,
      thumbnailUrl: each.thumbnail_url,
      title: each.title,
      viewCount: each.view_count,
      name: each.channel.name,
      profileImageUrl: each.channel.profile_image_url,
    }))
    this.setState({
      initialVideosDataList: modifiedData,
      urlStatus: ApiStatusConstant.success,
    })
  }

  getHomeVideosApiUrl = async () => {
    this.setState({urlStatus: ApiStatusConstant.inProgress})

    const {initialSearchValue} = this.state
    const homeVideosApiUrl = `https://apis.ccbp.in/videos/all?search=${initialSearchValue}`
    const token = Cookies.get('jwtToken')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    // console.log(homeVideosApiUrl)
    const requestUrl = await fetch(homeVideosApiUrl, options)
    const responseData = await requestUrl.json()
    // console.log(responseData)
    if (requestUrl.ok === true) {
      this.getUpdatedData(responseData)
    } else {
      this.setState({urlStatus: ApiStatusConstant.failure})
    }
  }

  renderSpinnerView = () => (
    <SpinnerContainer data-testid="loader">
      <Loader type="ThreeDots" height="50" width="50" color="blue" />
    </SpinnerContainer>
  )

  onClickSearchRetry = () => {
    this.getHomeVideosApiUrl()
  }

  renderSuccessView = () => (
    <ContextMessage.Consumer>
      {value => {
        const {isDarkMode} = value
        const {initialVideosDataList} = this.state

        return (
          <VideosDetailsListContainer>
            {initialVideosDataList.length > 0 ? (
              initialVideosDataList.map(eachVideo => (
                <VideoDetails eachVideo={eachVideo} key={eachVideo.id} />
              ))
            ) : (
              <EmptySearchContainer>
                <EmptySearchImg
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                  alt="no videos"
                />
                <EmptySearchTitle isDarkMode={isDarkMode}>
                  No Search results found
                </EmptySearchTitle>
                <EmptySearchDescription isDarkMode={isDarkMode}>
                  Try different key words or remove search filter
                </EmptySearchDescription>
                <EmptySearchRetryBtn
                  isDarkMode={isDarkMode}
                  type="button"
                  onClick={this.onClickSearchRetry}
                >
                  Retry
                </EmptySearchRetryBtn>
              </EmptySearchContainer>
            )}
          </VideosDetailsListContainer>
        )
      }}
    </ContextMessage.Consumer>
  )

  onClickRetry = () => {
    this.getHomeVideosApiUrl()
  }

  renderFailureView = () => (
    <ContextMessage.Consumer>
      {value => {
        const {isDarkMode} = value
        return (
          <FailureViewContainer>
            {isDarkMode ? (
              <FailureImg
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png"
                alt="failure"
              />
            ) : (
              <FailureImg
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
                alt="failure view"
              />
            )}
            <FailureTitle isDarkMode={isDarkMode}>
              Oops! Something Went Wrong
            </FailureTitle>
            <FailureDescription isDarkMode={isDarkMode}>
              We are having some trouble to complete your request.
              <br />
              Please try agin
            </FailureDescription>
            <FailureRetryBtn
              type="button"
              onClick={this.onClickRetry}
              isDarkMode={isDarkMode}
            >
              Retry
            </FailureRetryBtn>
          </FailureViewContainer>
        )
      }}
    </ContextMessage.Consumer>
  )

  getSwitchConditions = () => {
    const {urlStatus} = this.state
    let result = null

    switch (urlStatus) {
      case ApiStatusConstant.success:
        result = this.renderSuccessView()
        break
      case ApiStatusConstant.failure:
        result = this.renderFailureView()
        break
      case ApiStatusConstant.inProgress:
        result = this.renderSpinnerView()
        break

      default:
        result = ''
        break
    }

    return result
  }

  render() {
    const {isBannerClosed, initialSearchValue} = this.state
    console.log(initialSearchValue)
    return (
      <ContextMessage.Consumer>
        {value => {
          const {isDarkMode} = value
          const SearchIconColor = isDarkMode ? 'search-light' : 'dark-light'

          return (
            <>
              <Header />
              <HomePageContainer data-testid="home" isDarkMode={isDarkMode}>
                <Sidebar />
                <HomeContentContainer>
                  {isBannerClosed ? (
                    ''
                  ) : (
                    <BannerSectionContainer data-testid="banner">
                      <FlexContainer>
                        <BannerSectionLogo
                          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                          alt="nxt watch logo"
                        />

                        <CloseIcon
                          type="button"
                          data-testid="close"
                          onClick={this.onClickCloseBanner}
                        >
                          <AiOutlineCloseCircle className="close-icon" />
                        </CloseIcon>
                      </FlexContainer>
                      <BannerDescription>
                        Buy Nxt Watch Premium prepaid plans with <br /> UPI
                      </BannerDescription>
                      <BannerSectionBtn>GET IT NOW</BannerSectionBtn>
                    </BannerSectionContainer>
                  )}
                  <SearchBarContainer>
                    <SearchInput
                      value={initialSearchValue}
                      onChange={this.onChangeSearchValue}
                      type="search"
                      placeholder="Search"
                      isDarkMode={isDarkMode}
                    />
                    <SearchIconContainer>
                      <SearchBtn
                        type="button"
                        data-testid="searchButton"
                        onClick={this.onClickSearch}
                      >
                        <BsSearch className={SearchIconColor} />
                      </SearchBtn>
                    </SearchIconContainer>
                  </SearchBarContainer>
                  {this.getSwitchConditions()}
                </HomeContentContainer>
              </HomePageContainer>
            </>
          )
        }}
      </ContextMessage.Consumer>
    )
  }
}

export default Home
