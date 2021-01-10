import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
function Footer() {

    const top = () =>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
    }


    return (
        <div className="footer">
        
            <p onClick={top}>
                <div className="footer__top">
                    <center><h5>Back to top</h5></center>
                </div>
            </p>

            
        <div className="footer__middle">
            <div className="footer__col">
            <h5>Get to Know Us</h5>
            <div className="footer__link">
                <a href="https://www.aboutamazon.in/?utm_source=gateway&utm_medium=footer">
                    About Us
                </a>
            </div>
            <div className="footer__link">
                <a href="https://amazon.jobs/en/">
                Careers
                </a>
            </div>
            <div className="footer__link">
                <a href="https://press.aboutamazon.in/?utm_source=gateway&utm_medium=footer">
                    Press Releases
                </a>
            </div>
            <div className="footer__link">
                <a href="https://www.amazon.in/b?ie=UTF8&node=8872558031&ref_=footer_cares">
                    Amazon Cares
                    </a>
            </div>
            <div className="footer__link">
                <a href="https://www.amazon.in/Online-Charity/b?ie=UTF8&node=4594605031&ref_=footer_smile">    
                    Gift a Smile
                </a>
            </div>
        </div>
        <div className="footer__col">
            <h5>Connect With Us</h5>
            <div className="footer__link">
                <a href="https://www.facebook.com/AmazonIN">
                    Facebook
                </a>
            </div>
            <div className="footer__link">  
                <a href="https://twitter.com/AmazonIN">
                    Twitter
                </a>
            </div>
            <div className="footer__link">
                <a href="https://www.instagram.com/amazondotin/">
                    Instagram
                </a>
            </div>
            
        
        </div>
        <div className="footer__col">
            <h5>Make Money With Us</h5>
           <div className="footer__link">
                <a href="https://www.amazon.in/b/?_encoding=UTF8&ld=AZINSOANavDesktopFooter&node=2838698031&ref_=nav_footer_sell">
                    Sell on Amazon
                </a>
            </div>
           <div className="footer__link">
                <a href="https://www.amazon.in/b/?node=16192220031&ref_=map_1_b2b_GW_FT">
                    Sell under Amazon Accelerator
                </a>
            </div>
           <div className="footer__link">
                <a href="https://affiliate-program.amazon.in/?ref_=footer_assoc&utm_campaign=assocshowcase&utm_medium=footer&utm_source=GW">
                    Become an Affiliate
                </a>
            </div>
           <div className="footer__link">
                <a href="https://services.amazon.in/services/fulfilment-by-amazon/benefits.html/ref=az_footer_fba?ld=AWRGINFBAfooter">
                    Fulfilment by Amazon
                </a>
            </div>
           <div className="footer__link">
                <a href="https://advertising.amazon.com/en-gb">
                    Advertise Your Products
                </a>
            </div>
           <div className="footer__link">
                <a href="https://www.amazonpay.in/merchant">
                    Amazon Pay on Merchants
                </a>
            </div>
        </div>
        <div className="footer__col">
            <h5>Let Us Help You</h5>
            <div className="footer__link">
                <a href="https://www.amazon.in/gp/help/customer/display.html?ie=UTF8&nodeId=GDFU3JS5AL6SYHRD&ref_=footer_covid">
                    COVID-19 and Amazon
                </a>
            </div>
            <div className="footer__link">
                <a href="https://www.amazon.in/gp/css/homepage.html?ie=UTF8&ref_=footer_ya">
                    Your Account</
                a>
            </div>
            <div className="footer__link">
                <a href="https://www.amazon.in/ap/signin?clientContext=260-3032283-7808465&openid.return_to=https%3A%2F%2Fwww.amazon.in%2Fspr%2Freturns&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=amzn_psr_desktop_in&openid.mode=checkid_setup&marketPlaceId=A21TJRUUN4KGV&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&pageId=Amazon&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.pape.max_auth_age=3600&siteState=clientContext%3D257-0496302-7157245%2CsourceUrl%3Dhttps%253A%252F%252Fwww.amazon.in%252Fspr%252Freturns%2Csignature%3Dzm4fajOBb4GgX21Pgd7GJj2FCK6Kcj3D">
                    Returns Centre
                </a>
            </div>
            <div className="footer__link">
                <a href="https://www.amazon.in/gp/help/customer/display.html?ie=UTF8&nodeId=201083470&ref_=footer_swc">
                    100% Purchase Protection
                </a>
            </div>
            <div className="footer__link">
                <a href="https://www.amazon.in/b?ie=UTF8&node=6967393031&ref_=footer_mobapp">
                    Amazon App Download
                </a>
            </div>
            <div className="footer__link">
                <a href="https://www.amazon.in/aa?_encoding=UTF8&ref_=footer_assistant_download_copy">
                    Amazon Assistant Download
                </a>
            </div>
            <div className="footer__link">
                <a href="https://www.amazon.in/gp/help/customer/display.html?ie=UTF8&nodeId=200507590&ref_=footer_gw_m_b_he">
                    Help
                </a>
            </div>
         </div>
            
            </div>

            <div className="footer__bottom">
                <center>
                <Link to='/'>
                    <img
                    className="footer__image"
                        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    alt="" 
                    onClick={() => window.location.reload(false)}
                    />
                </Link>
                </center>
                <center><h6>Developed By Saikat Mukhopadhyay</h6></center>
       
            </div>
        </div>
    )
}

export default Footer
