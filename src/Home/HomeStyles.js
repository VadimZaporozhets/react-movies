export const HomeStyles = theme => ({
    home: {
        width: 'auto',
        margin: `0 auto`,
        maxWidth: 1200,
        paddingTop: theme.spacing.unit * 3,
        [theme.breakpoints.down('md')]: {
            margin: `0 ${theme.spacing.unit * 3}px`,
            maxWidth: '100%'
        }
    }
});
