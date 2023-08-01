const ContactPage = () => {
  return (
    <div className="my-12 max-w-screen-lg mx-auto px-4">
      {/* contact us page title  */}
      <div>
        <h1 className="text-3xl font-bold font-GentiumBookPlus">Contact Us</h1>
        <p className="mt-2 text-gray-600 font-RobotoCondensed tracking-wider italic">
          Have a question, feedback or suggestion? We&apos;d love to hear from
          you. Fill the form below and we&apos;ll get back to you as soon as we can!
        </p>
      </div>

      {/* form  */}
      <div className="mt-12 bg-primary rounded-md max-w-screen-sm mx-auto px-4" >
        <form className="p-5 space-y-4" noValidate>
            <div className="space-y-2">
                <label htmlFor="name" className="text-secondary block text-xl" >Name</label>
                <input placeholder="username" type="text" id="name" className="contact-form-control" />
            </div>

            <div className="space-y-2">
                <label htmlFor="email" className="text-secondary block text-xl" >
                    Email
                </label>
                <input  placeholder="user@example.com" type="email" id="email" className="contact-form-control" />
            </div>

            <div className="space-y-2">
                <label htmlFor="message" className="text-secondary block text-xl">Message</label>
                <textarea id="message" rows="10" className="contact-form-control resize-none" placeholder="Write a message..." ></textarea>
            </div>

            <div>
                <button className="bg-secondary text-white rounded-md px-4 py-2">Send Message</button>
            </div>
        </form>
      </div>
    </div>
  );
};
export default ContactPage;
