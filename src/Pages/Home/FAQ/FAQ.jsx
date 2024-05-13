const FAQ = () => {
  return (
    <div className="mt-10">
      <div className="border-b-8 border-[#FF3811] bg-base-200 mb-6 rounded-3xl shadow-xl">
        <h3 className="text-center text-4xl pt-8 pb-8 font-bold">
          Frequently Asked Questions
        </h3>
      </div>
      <div className="collapse bg-base-200">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title text-xl font-bold">
          What types of devices do you repair?
        </div>
        <div className="collapse-content">
          <p className="text-[18px]">
            We specialize in repairing a wide range of electronic devices
            including smartphones, tablets, laptops, desktop computers, gaming
            consoles, and more. Whether it&apos;s a hardware issue, software
            glitch, or water damage, our expert technicians are equipped to
            handle it all.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-bold">
          How long does a typical repair take and do you offer expedited
          services?
        </div>
        <div className="collapse-content">
          <p className="text-[18px]">
            The repair time can vary depending on the complexity of the issue,
            but we strive to complete most repairs within 24 to 48 hours. For
            urgent situations, we do offer expedited services where possible.
            Feel free to inquire about our express repair options when
            scheduling your appointment.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-bold">
          Are your repair services backed by any warranties or guarantees?
        </div>
        <div className="collapse-content">
          <p className="text-[18px]">
            Absolutely. We stand behind the quality of our workmanship and parts
            used in every repair. That&apos;s why we offer a comprehensive
            warranty on all repairs. If you encounter any issues post-repair,
            simply reach out to us and we&apos;ll make it right. Your
            satisfaction and device&apos;s functionality are our top priorities.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-bold">
            Do you offer pickup and delivery services for repairs?
        </div>
        <div className="collapse-content">
          <p className="text-[18px]">
            Yes, We offer pickup and delivery services for our customers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
