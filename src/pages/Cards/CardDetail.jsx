import Swal from "sweetalert2";

const CardDetail = ({ Detail }) => {


    const { id, banner_image, title, paragraph, price, organizer,name } = Detail || {};

    const handleClick = () =>{
        Swal("Good job!", "You Joined Sucessfully!\n Your Ticket will be sent on your Email,Soon!!", "success");
    }

    return (
        <div>
            <div className=" bg-clip-border text-gray-700 ">


                <img className="w-full h-[550px]" src="https://i.ibb.co/MV9cCXc/Screenshot-112.png" alt="" />

                <div className='backdrop-brightness-50  w-full flex justify-between '>
                    <button className='btn bg-violet-600  hover:bg-blue-500 border-none text-white my-5 ml-10'>Organized by : {organizer}</button>
                    <button onClick={handleClick} className='btn bg-violet-600  hover:bg-blue-500 border-none text-white my-5 mr-10'>Join Now: <span className="text-xl">{price}</span></button>
            </div>
            <div className="p-6">
                <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    {title}
                </h4>
                <p className="mt-3 block font-sans text-xl font-normal leading-relaxed text-gray-700 antialiased">
                    {paragraph}
                </p>
            </div>
            
            <div className="flex items-center justify-between p-6">

            </div>
        </div>
        </div >
    );
};

export default CardDetail;