import Title from "../components/Title.jsx";
import {assets} from "../assets/assets.js";
import Newsletter from "../components/Newsletter.jsx";

const Contact = () => {
    return (
        <div>
            <div className={"text-center text-2xl pt-10 border-t"}>
                <Title primaryText={'CONTACT'} secondaryText={'US'} />
            </div>
            <div className={"my-10 flex flex-col justify-center md:flex-row gap-10 mb-28"}>
                <img className={"w-full md:max-w-[480px]"} src={assets.contact_img} alt=""/>
                <div className={"flex flex-col justify-center items-start gap-6"}>
                    <p className={"font-semibold text-xl text-gray-600"}>Our Store</p>
                    <p className={"text-gray-500"}>34014 Denver Station <br/> Anka 204, Denver, TR</p>
                    <p className={"text-gray-500"}>Tel : +99 99999 99999 <br/> Email: info@manhattancom.com</p>
                    <p className={"font-semibold text-xl text-gray-600"}>Careers at Manhattan</p>
                    <p className={"text-gray-500"}> Learn more about our teams and job openings.</p>
                    <button className={"border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500"}>Explore Jobs</button>
                </div>
            </div>
            <Newsletter/>
        </div>
    );
};
export default Contact;