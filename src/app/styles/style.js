const styles = {
    lightTheme: {
        text: {
            title: {
                stroke: "text-stroke-light poppins-semibold text-[8rem]",
                regular: "poppins-semibold text-[8rem]",
                small: "poppins-semibold text-[6rem]",
                xSmall: "poppins-semibold text-[3rem]",
            },
            huge: {
                stroke: "text-stroke-light poppins-medium text-[4rem]",
                light: "",
                regular: "poppins-medium text-[4rem]",
            },
            giant: {
                stroke: "text-stroke-light poppins-medium text-[3rem]",
                light: "",
                regular: "poppins-medium text-[3rem]",
            },
            big: {
                stroke: "text-stroke-light poppins-medium text-[2.25rem]",
                light_stroke: "text-stroke-light poppins-light text-[2.25rem]",
                light: "poppins-light text-[2.25rem]",
                regular: "poppins-medium text-[2.25rem]",
                small: "poppins-medium text-[1.6rem]",
                small_light: "poppins-light text-[1.6rem]"
            },
            large: {
                stroke: "text-stroke-light inter-1 text-[2rem] text-black/[0.5]",
                regular: "inter-1 text-[2rem] text-black/[0.5]",
            },
            body: {
                body: "inter-1 text-[1rem] text-black/[0.5]",
                body_colored: "inter-1 text-[1rem]",
                body_colored_stroke: "text-stroke-light inter-1 text-[1rem]",
                caption: "inter-1 text-[0.8125rem] text-black/[0.5]",
            },
            extra1: {
                light: "",
                regular: "",
                bold: "",
            },
            extra2: {
                light: "",
                regular: "",
                bold: "",
            },
        },
        buttons: {
            _1_btn: "",
            _2_btn: "",
            _3_faded: "",
        }
    },
    darkTheme: {
        text: {
            title: {
                stroke: "text-stroke-light poppins-semibold text-[8rem] text-white",
                regular: "poppins-semibold text-[8rem] text-white",
            },
            huge: {
                stroke: "text-stroke-light poppins-medium text-[4rem] text-white",
                light: "",
                regular: "poppins-medium text-[4rem] text-white",
            },
            giant: {
                stroke: "text-stroke-light poppins-medium text-[3rem] text-white",
                light: "",
                regular: "poppins-medium text-[3rem] text-white",
            },
            big: {
                stroke: "text-stroke-light poppins-medium text-[2.25rem] text-white",
                light: "text-stroke-light poppins-light text-[2.25rem] text-white",
                regular: "poppins-medium text-[2.25rem] text-white",
            },
            large: {
                stroke: "text-stroke-light inter-1 text-[2rem] text-white/[0.7]",
                regular: "inter-1 text-[2rem] text-white/[0.7]",
            },
            body: {
                body: "inter-1 text-[1rem] text-white/[0.7]",
                caption: "inter-1 text-[0.8125rem] text-white/[0.7]",
            },
            extra1: {
                light: "",
                regular: "",
                bold: "",
            },
            extra2: {
                light: "",
                regular: "",
                bold: "",
            },
        },
        buttons: {
            _1_btn: "",
            _2_btn: "",
            _3_faded: "",
        }
    },
    colors: {
        _1_white: "white",
        _2_darkGrey: "black/[0.5]",
        _3_lightGrey: "black/[0.2]",
        _4_black: "black",
        _5_accent1: "",
        _6_accent2: "",
    }
}

export default styles

/**
 * SIZE TEMPLATES
 * 8rem         128px   Title
 * 4rem         64px    Huge
 * 3rem         48px    Giant
 * 2.25rem      36px    Big
 * 2rem         32px    Large
 * 1rem         16px    Body
 * 0.8125rem    13px    Caption
 */