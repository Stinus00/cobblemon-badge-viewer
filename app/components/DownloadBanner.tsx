const DownloadBanner = () => {
    return (
        <div className="flex flex-col items-center space-x-4"
             style={{marginTop: "1rem"}}>
            <span className="text-2xl font-medium"
                  style={{marginTop: "1rem", marginRight: 0}}>
                DOWNLOAD PACK <a className={"text-blue-700 hover:underline dark:text-blue-500"} href={"https://modrinth.com/project/7ihemqLZ"}>HERE</a>
            </span>
        </div>
    );
};

export default DownloadBanner;