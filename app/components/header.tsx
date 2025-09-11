"use client"

import Link from "next/link"
import Logo from "../../public/logo/logo.png"
import ImgMinioGreen from "../../public/img/SanPham/minio-green.png"
import ImgHerioGreenWhite from "../../public/img/SanPham/herio-green-white.png"
import ImgHerioGreenBlack from "../../public/img/SanPham/herio-green-black.png"
import ImgLimoGreen from "../../public/img/SanPham/herio-green-white.png"
import { useState } from "react"
import Style from "./style.module.css"
import SanPham from "./SanPham"

function swapDisplay(display: string) {
    if (display === "hidden") {
        return "block"
    }
    return "hidden"
}

export default function Header() {

    const [displayGioiThieu, setDisplayGioiThieu] = useState("hidden")
    const [displaySanPham, setDisplaySanPham] = useState("hidden")
    return (


        <div className={`flex justify-between pt-5 pl-20 pr-20 pb-5 z-0`}>
            <Link href="/">
                <div className={`w-35`}>
                    <img className={`w-full`} src={Logo.src} alt="" />
                </div>
            </Link>

            <div>
                <ul className={`text-xl font-medium flex`}>
                    <li className={`ml-5`}>
                        <Link href="/">
                            Trang chủ
                        </Link>
                    </li>
                    <li
                        className={`ml-5`}
                        onMouseEnter={() => {
                            setDisplayGioiThieu(swapDisplay(displayGioiThieu))
                        }}
                        onMouseLeave={() => {
                            setDisplayGioiThieu(swapDisplay(displayGioiThieu))
                        }}
                    >
                        <Link href="/">
                            Giới thiệu
                        </Link>

                        <div className={`z-10 absolute pt-2 ${displayGioiThieu} pl-7 pb-10 pr-2`}>
                            <ul>
                                <li className={`${Style.hoverColorBlue} mt-2 border-b-1 border-gray-200`}>
                                    <Link href={`/`}>
                                        Pin và trạm sạt ô tô
                                    </Link>
                                </li>
                                <li className={`${Style.hoverColorBlue} mt-2 border-b-1 border-gray-200`}>
                                    <Link href={`/`}>
                                        Thiết bị sạt tại nhà
                                    </Link>
                                </li>
                                <li className={`${Style.hoverColorBlue} mt-2`}>
                                    <Link href={`/`}>
                                        Thuê pin ô tô điện linh hoạt
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li
                        className={`ml-5`}
                        onMouseEnter={() => {
                            setDisplaySanPham(swapDisplay(displaySanPham))
                        }}
                        onMouseLeave={() => {
                            setDisplaySanPham(swapDisplay(displaySanPham))
                        }}
                    >
                        <Link href={`/`}>
                            Sản phẩm
                        </Link>

                        <div className={`z-10 absolute ${displaySanPham}  ${Style.text15px} pl-20 pr-20 bg-transparent w-full left-0`}>
                            <div className={` ${displaySanPham} mt-10 flex justify-between w-full  pl-10 pr-10`}>
                                <SanPham
                                    linkSP="/"
                                    imgSanPham={ImgMinioGreen.src}
                                    nameSanPham="Dòng xe Mini Car"
                                    soChoNgoi="5"
                                    gia="269.000.000"
                                    nedc="170"
                                />

                                <SanPham
                                    linkSP="/"
                                    imgSanPham={ImgHerioGreenWhite.src}
                                    nameSanPham="Dòng xe B-SUV"
                                    soChoNgoi="5"
                                    gia="499.000.000"
                                    nedc="326"
                                />

                                <SanPham
                                    linkSP="/"
                                    imgSanPham={ImgHerioGreenBlack.src}
                                    nameSanPham="Dòng xe Mini Car"
                                    soChoNgoi="5"
                                    gia="269.000.000"
                                    nedc="170"
                                />

                                <SanPham
                                    linkSP="/"
                                    imgSanPham={ImgLimoGreen.src}
                                    nameSanPham="Dòng xe Mini Car"
                                    soChoNgoi="5"
                                    gia="269.000.000"
                                    nedc="170"
                                />
                            </div>

                            <div className={` ${displaySanPham} mt-10 flex justify-between w-full  pl-10 pr-10`}>
                                <SanPham
                                    linkSP="/"
                                    imgSanPham={ImgMinioGreen.src}
                                    nameSanPham="Dòng xe Mini Car"
                                    soChoNgoi="5"
                                    gia="269.000.000"
                                    nedc="170"
                                />

                                <SanPham
                                    linkSP="/"
                                    imgSanPham={ImgHerioGreenWhite.src}
                                    nameSanPham="Dòng xe B-SUV"
                                    soChoNgoi="5"
                                    gia="499.000.000"
                                    nedc="326"
                                />

                                <SanPham
                                    linkSP="/"
                                    imgSanPham={ImgHerioGreenBlack.src}
                                    nameSanPham="Dòng xe Mini Car"
                                    soChoNgoi="5"
                                    gia="269.000.000"
                                    nedc="170"
                                />

                                <SanPham
                                    linkSP="/"
                                    imgSanPham={ImgLimoGreen.src}
                                    nameSanPham="Dòng xe Mini Car"
                                    soChoNgoi="5"
                                    gia="269.000.000"
                                    nedc="170"
                                />
                            </div>

                            <div className={` ${displaySanPham} mt-10 flex justify-between w-1/2  pl-10 pr-10`}>
                                <SanPham
                                    linkSP="/"
                                    imgSanPham={ImgMinioGreen.src}
                                    nameSanPham="Dòng xe Mini Car"
                                    soChoNgoi="5"
                                    gia="269.000.000"
                                    nedc="170"
                                />

                                <SanPham
                                    linkSP="/"
                                    imgSanPham={ImgHerioGreenWhite.src}
                                    nameSanPham="Dòng xe B-SUV"
                                    soChoNgoi="5"
                                    gia="499.000.000"
                                    nedc="326"
                                />
                            </div>

                        </div>
                    </li>
                    <li>

                    </li>
                    <li>

                    </li>
                    <li>

                    </li>
                </ul>
            </div>

            <div className={`flex`}>
                <Link className={`ml-10`} href="/">
                    En
                </Link>

                <Link className={`ml-10`} href="/">
                    VN
                </Link>
            </div>
        </div>




    )
}