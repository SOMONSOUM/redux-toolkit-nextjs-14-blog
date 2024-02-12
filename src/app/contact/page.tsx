import Nav from '@/components/Nav'
import CustomBtn from '@/customs/CustomBtn'

function Contact() {
    return (
        <div className='bg-white'>
            <Nav />
            <div className="container mx-auto">
                <div className="newsletter bg-white px-3 py-[120px]">
                    <div className="lg:w-[95%] lg:h-[476px] mx-auto bg-primaBlue p-3 flex flex-col justify-center">
                        <div className="lg:w-[95%] lg:mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5 place-items-end p-3">
                            <h2 className="text-lightBase text-[30px] leading-[42px] lg:text-[62px] lg:leading-[74.4px] font-soThick">Sign Up for Our Newsletters</h2>
                            <p className="text-lightBase text-[16px] leading-[20px] font-lightThin lg:w-[400px]">
                                Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit, sed do eiusmod. Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit, sed do eiusmod.
                            </p>
                        </div>
                        <div className="formSubmit grid grid-cols-1 lg:grid-cols-3 gap-5 p-3 py-12">
                            <input className="lg:col-span-2 w-full rounded-[8px] text-lightGrey p-1 focus:outline-none" type="text" placeholder="Input your email address here" />
                            <CustomBtn text="Subscribe Now" className="w-[164px] h-[56px] bg-mainOrange text-lightBase rounded-[8px] py-[18px] px-[24px]" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact