import Link from "next/link"

export default function SanPham(props: any) {
    return (
        <div
            className={` w-80 text-gray-700`}
        >
            <div>
                <Link href={props.linkSP}>
                    <img src={props.imgSanPham} alt="ảnh" />
                </Link>

            </div>

            <div>
                <div className={`flex justify-between`}>
                    <div className={`text-blue-500`}>
                        {props.nameSanPham}
                    </div>

                    <div>
                        {props.soChoNgoi} chỗ ngồi nè
                    </div>
                </div>

                <div className={`flex justify-between`}>
                    <div>
                        {props.nedc} km {`(NEDC)`}
                    </div>

                    <div>
                        {props.gia} VNĐ
                    </div>
                </div>
            </div>
        </div>
    )
}