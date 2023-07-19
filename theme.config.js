const YEAR = new Date().getFullYear()

export default {
  footer: (
    <footer>
      <small>
        <time>{YEAR}</time> © Kaustav Mukhopadhyay.
      </small>
      <style jsx>{`
        footer {
          margin-top: 3.5rem;
        }
        a {
          float: right;
        }
      `}</style>
    </footer>
  ),
}
