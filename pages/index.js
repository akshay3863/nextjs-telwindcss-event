import React from "react";
import Calendar from "react-calendar";
import moment from "moment";
import { useRouter } from "next/router";
const Index = () => {
  const router = useRouter();
  var defultData = {
    title: "",
    date: new Date(),
    description: "",
  };
  const [showModal, setShowModal] = React.useState(false);
  const [value, onChange] = React.useState(new Date());
  const [eventValue, setEventValue] = React.useState(defultData);
  const [dateData, setdateData] = React.useState([
    {
      title: "Call for returns of APP and PU for 2022-2023",
      date: new Date(),
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
  ]);

  React.useEffect(() => {
    let Data = localStorage.getItem("data");
    if (Data) {
      setdateData(JSON.parse(Data));
    }
  }, []);

  const callDay = (val) => {
    setShowModal(!showModal);
    setEventValue({
      ...eventValue,
      date: val,
    });
  };

  const addEventHandler = () => {
    let Data = dateData;
    Data.push(eventValue);
    setdateData(Data);
    setShowModal(false);
    localStorage.setItem("data", JSON.stringify(dateData));
  };

  return (
    <div className="container px-5 sm:px-20 my-10">
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-xl font-semibold">
                    Add event for {moment(value).format("DD MMM YY")}
                  </h3>
                </div>

                <div className="relative p-6 flex-auto">
                  <input
                    type="text"
                    name="title"
                    value={eventValue.title}
                    onChange={(e) => {
                      setEventValue({
                        ...eventValue,
                        title: e.target.value,
                      });
                    }}
                    placeholder="Enter Title"
                    className="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                  />
                  <textarea
                    type="text"
                    name="description"
                    value={eventValue.description}
                    onChange={(e) => {
                      setEventValue({
                        ...eventValue,
                        description: e.target.value,
                      });
                    }}
                    placeholder="Enter Description"
                    className="px-3 mt-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                  />
                </div>

                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-pr text-white active:bg-pr font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={addEventHandler}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      <div className="grid grid-cols-3 gap-10 w-full items-center">
        <div className="col-span-3 sm:col-span-2 ">
          <div className="text-xl border-solid border-b-2 border-gp pb-3">
            Calendar
          </div>
          <div className="event-handler">
            {dateData.map((val, idx) => {
              return (
                <div
                  className="flex items-center cursor-pointer	text-sm text-pr font-bold flex-row justify-between border-solid border-b-2 border-gp py-4"
                  key={idx}
                  onClick={() => {
                    router.push(
                      {
                        pathname: "/event",
                        query: {
                          title: val.title,
                          description: val.description,
                        },
                      },
                      "/event"
                    );
                  }}
                >
                  <div className="font-bold text-sm text-black ">
                    {val.title}
                    <span className="text-pr font-bold text-sm ml-1">{`>`}</span>
                  </div>
                  <div className="mr-5">
                    {moment(val.date).format("DD MMM YY")}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-span-3 sm:col-span-1 ">
          <Calendar onChange={onChange} value={value} onClickDay={callDay} />
        </div>
      </div>
    </div>
  );
};

export default Index;
