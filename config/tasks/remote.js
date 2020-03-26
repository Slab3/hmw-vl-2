import gulp from 'gulp'

export default function () {
    return function (done) {
        return gulp
            .series(
                'differentStyles', 'differentJs'
            )(done)
    }
}

