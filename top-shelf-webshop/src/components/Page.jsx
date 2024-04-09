
function Page() {

  const title = "Some title";
  const description = "Some description";

  // const title = fakeProps.title;
  // const description = fakeProps.desctiption;

  // const { title, description } = props; // destructuring components
  // const { title, description } = fakeProps; // destructuring components

  return (
    <>
      <div id={"sidebar"}>{title}</div>
      <p>{description}</p>
      {/*<h2>This is a page component</h2>*/}
    </>
  )
}

export { Page }
