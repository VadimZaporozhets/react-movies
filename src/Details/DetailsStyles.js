export const DetailsStyles = theme => ({
    details: {
        maxWidth: 1200,
        width: 'auto',
        margin: `0 auto`,
        [theme.breakpoints.down('md')]: {
            margin: `0 ${theme.spacing.unit * 3}px`,
            maxWidth: '100%'
        }
    }
});
