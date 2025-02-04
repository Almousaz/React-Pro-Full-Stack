


const ensureAuth = async (req, res, next) => {
    try {
      if (req.isAuthenticated()) {
        return next();
      } else {
        // Send a JSON response with an indication to redirect
        return res.status(401).json({ message: 'Unauthorized', redirect: '/' });
      }
    } catch (err) {
      console.error('Error in ensureAuth middleware:', err);
      res.status(500).json({ message: 'Server error' });
    }
  }


const ensureGuest = async (req, res, next) => {
    try {
      if (!req.isAuthenticated()) {
        return next();
      } else {
        // Send a JSON response with an indication to redirect
        return res.status(200).json({ message: 'Redirecting to dashboard', redirect: '/dashboard' });
      }
    } catch (err) {
      console.error('Error in ensureGuest middleware:', err);
      res.status(500).json({ message: 'Server error' });
    }
  }
  

export {ensureAuth , ensureGuest } 