import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export const ReponsiveQueryDown = (breakpoint) => {
    const theme = useTheme();
    return useMediaQuery(theme.breakpoints.down(breakpoint));
}


export const ReponsiveQueryUp = (breakpoint) => {
    const theme = useTheme();
    return useMediaQuery(theme.breakpoints.up(breakpoint));
}


export const ReponsiveQueryBetween = (bp1, bp2 ) => {
    const theme = useTheme();
    return useMediaQuery(theme.breakpoints.between(bp1, bp2));
}



