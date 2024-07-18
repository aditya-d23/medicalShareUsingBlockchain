async function main() {
    const search = await ethers.getContractFactory("Search");
    const search_ = await search.deploy();
    console.log("Contract Deployed to Address:", search_);
  }
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });