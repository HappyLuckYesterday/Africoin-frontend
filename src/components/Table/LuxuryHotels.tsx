import MyTable from "./MyTable";

export default function LuxuryHotels() {
  //   const data = [
  //     {
  //       id: 1,
  //       Title: "Cupcake",
  //       Country: "Brazil",
  //       Web_Url: "https://tintswalo.com",
  //       Video_Path: "https://www.youtube.com/watch?v=mJV90f2SxkE",
  //       Date: "2019-07-23",
  //     },
  //     {
  //       id: 2,
  //       Title: "Pizza",
  //       Country: "Italy",
  //       Web_Url: "https://tintswalo.com",
  //       Video_Path: "https://www.youtube.com/watch?v=mJV90f2SxkE",
  //       Date: "2019-07-23",
  //     },
  //     {
  //       id: 3,
  //       Title: "Spagetti",
  //       Country: "Italy",
  //       Web_Url: "https://tintswalo.com",
  //       Video_Path: "https://www.youtube.com/watch?v=mJV90f2SxkE",
  //       Date: "2019-07-23",
  //     },
  //     {
  //       id: 4,
  //       Title: "Coffee",
  //       Country: "United States",
  //       Web_Url: "https://tintswalo.com",
  //       Video_Path: "https://www.youtube.com/watch?v=mJV90f2SxkE",
  //       Date: "2019-07-23",
  //     },
  //     {
  //       id: 5,
  //       Title: "Cupcake",
  //       Country: "Brazil",
  //       Web_Url: "https://tintswalo.com",
  //       Video_Path: "https://www.youtube.com/watch?v=mJV90f2SxkE",
  //       Date: "2019-07-23",
  //     },
  //     {
  //       id: 6,
  //       Title: "Cupcake",
  //       Country: "Brazil",
  //       Web_Url: "https://tintswalo.com",
  //       Video_Path: "https://www.youtube.com/watch?v=mJV90f2SxkE",
  //       Date: "2019-07-23",
  //     },
  //     {
  //       id: 7,
  //       Title: "Cupcake",
  //       Country: "Brazil",
  //       Web_Url: "https://tintswalo.com",
  //       Video_Path: "https://www.youtube.com/watch?v=mJV90f2SxkE",
  //       Date: "2019-07-23",
  //     },
  //     {
  //       id: 8,
  //       Title: "Cupcake",
  //       Country: "Brazil",
  //       Web_Url: "https://tintswalo.com",
  //       Video_Path: "https://www.youtube.com/watch?v=mJV90f2SxkE",
  //       Date: "2019-07-23",
  //     },
  //     {
  //       id: 9,
  //       Title: "Cupcake",
  //       Country: "Brazil",
  //       Web_Url: "https://tintswalo.com",
  //       Video_Path: "https://www.youtube.com/watch?v=mJV90f2SxkE",
  //       Date: "2019-07-23",
  //     },
  //     {
  //       id: 10,
  //       Title: "Cupcake",
  //       Country: "Brazil",
  //       Web_Url: "https://tintswalo.com",
  //       Video_Path: "https://www.youtube.com/watch?v=mJV90f2SxkE",
  //       Date: "2019-07-23",
  //     },
  //     {
  //       id: 11,
  //       Title: "Cupcake",
  //       Country: "Brazil",
  //       Web_Url: "https://tintswalo.com",
  //       Video_Path: "https://www.youtube.com/watch?v=mJV90f2SxkE",
  //       Date: "2019-07-23",
  //     },
  //     {
  //       id: 12,
  //       Title: "Cupcake",
  //       Country: "Brazil",
  //       Web_Url: "https://tintswalo.com",
  //       Video_Path: "https://www.youtube.com/watch?v=mJV90f2SxkE",
  //       Date: "2019-07-23",
  //     },
  //     {
  //       id: 13,
  //       Title: "Cupcake",
  //       Country: "Brazil",
  //       Web_Url: "https://tintswalo.com",
  //       Video_Path: "https://www.youtube.com/watch?v=mJV90f2SxkE",
  //       Date: "2019-07-23",
  //     },
  //   ];

  const data = [
    {
      id: 1,
      Email: "kan@fjdf.com",
      Country: "Mother",
      Role: "2",
    },
    {
      id: 2,
      Email: "kan@adfefe.com",
      Country: "Mother",
      Role: "2",
    },
    {
      id: 3,
      Email: "kan@qwefq.com",
      Country: "adffwef",
      Role: "2",
    },
    {
      id: 4,
      Email: "kan@jsha.com",
      Country: "ewfwef",
      Role: "2",
    },
    {
      id: 5,
      Email: "kan@han.com",
      Country: "Mother",
      Role: "2",
    },
    {
      id: 6,
      Email: "kan@han.com",
      Country: "Mother",
      Role: "2",
    },
    {
      id: 7,
      Email: "kan@han.com",
      Country: "Mother",
      Role: "2",
    },
    {
      id: 8,
      Email: "kan@han.com",
      Country: "Mother",
      Role: "2",
    },
    {
      id: 9,
      Email: "kan@han.com",
      Country: "Mother",
      Role: "2",
    },
    {
      id: 10,
      Email: "kan@han.com",
      Country: "Mother",
      Role: "2",
    },
  ];

  const headCells = [
    {
      id: "Email",
      numeric: false,
      disablePadding: true,
      label: "Email",
    },
    {
      id: "Country",
      numeric: false,
      disablePadding: false,
      label: "Country",
    },
    {
      id: "Role",
      numeric: false,
      disablePadding: false,
      label: "Role",
    },
    {
      id: "",
      numeric: false,
      disablePadding: false,
      label: "",
    },
  ];

  return (
    <div className="relative">
      <h1 className="text-center text-[40px] my-10 font-bold">Luxury Hotels</h1>
      <div className="flex justify-center items-center">
        <div className="w-5/6 shadow-lg p-5 rounded-lg mb-20">
          <MyTable
            title="Luxury Hotels"
            headCells={headCells}
            initial_rows={data}
          />
        </div>
      </div>
    </div>
  );
}
