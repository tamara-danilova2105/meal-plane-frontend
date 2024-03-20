export const UploadFile = ({ uploadFileFromDisk }) => {
    return (
        <div>
            <button>
                Upload Image
            </button>
            <input
                className={'btn-import'}
                type="file"
                accept="image/*, .png, .jpg, .gif, .web, .pdf,"
                onChange={uploadFileFromDisk}
            />
        </div>

    )
}