import { useState } from 'react';
import { Mic, Mail, Phone, User, Users, CheckCircle2, Music, Award, Star, Sparkles } from 'lucide-react';

export function EventRegistrationForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    category: '',
    songTitle: '',
    artistName: '',
    performanceStyle: '',
    numberOfAttendees: '1',
    specialRequirements: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }
    if (!formData.category) {
      newErrors.category = 'Please select a category';
    }
    if (!formData.songTitle.trim()) {
      newErrors.songTitle = 'Song title is required';
    }
    if (!formData.performanceStyle) {
      newErrors.performanceStyle = 'Please select a performance style';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmitted(true);
      console.log('Form submitted:', formData);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      category: '',
      songTitle: '',
      artistName: '',
      performanceStyle: '',
      numberOfAttendees: '1',
      specialRequirements: '',
    });
    setErrors({});
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 flex items-center justify-center p-4 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-32 h-32 bg-white/10 rounded-full animate-pulse delay-150"></div>
          <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-white/10 rounded-full animate-pulse delay-300"></div>
          <Star className="absolute top-10 right-10 w-8 h-8 text-white/30 animate-spin" style={{ animationDuration: '10s' }} />
          <Sparkles className="absolute bottom-10 left-10 w-8 h-8 text-white/30 animate-bounce" />
        </div>

        <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 text-center relative z-10 transform hover:scale-105 transition-transform duration-300">
          <div className="flex justify-center mb-4">
            <div className="relative">
              <CheckCircle2 className="w-20 h-20 text-green-600 animate-bounce" />
              <div className="absolute -top-2 -right-2">
                <Sparkles className="w-8 h-8 text-yellow-400" />
              </div>
            </div>
          </div>
          <h2 className="mb-4 text-gray-900">Registration Successful! 🎉</h2>
          <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg p-4 mb-4">
            <p className="text-gray-800 font-medium">
              Welcome to the competition, {formData.firstName}! 
            </p>
            <p className="text-gray-600 text-sm mt-2">
              Get ready to perform "{formData.songTitle}"
            </p>
          </div>
          <p className="text-gray-600 mb-6">
            A confirmation email has been sent to <span className="font-medium text-purple-600">{formData.email}</span>
          </p>
          <div className="grid grid-cols-3 gap-3 mb-6">
            <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 p-3 rounded-lg">
              <Award className="w-6 h-6 text-yellow-600 mx-auto mb-1" />
              <p className="text-xs text-gray-700">Cash Prize</p>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-purple-200 p-3 rounded-lg">
              <Star className="w-6 h-6 text-purple-600 mx-auto mb-1" />
              <p className="text-xs text-gray-700">Fame</p>
            </div>
            <div className="bg-gradient-to-br from-pink-100 to-pink-200 p-3 rounded-lg">
              <Music className="w-6 h-6 text-pink-600 mx-auto mb-1" />
              <p className="text-xs text-gray-700">Record Deal</p>
            </div>
          </div>
          <button
            onClick={handleReset}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Register Another Participant
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-white/10 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-white/10 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-white/10 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <Music className="absolute top-20 right-1/4 w-12 h-12 text-white/20 animate-bounce" />
        <Mic className="absolute bottom-32 right-10 w-10 h-10 text-white/20 animate-bounce" style={{ animationDelay: '0.3s' }} />
        <Star className="absolute top-32 left-1/3 w-8 h-8 text-white/30" />
        <Sparkles className="absolute bottom-20 right-1/3 w-8 h-8 text-white/30" />
      </div>

      <div className="w-full max-w-2xl bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 relative z-10 transform hover:shadow-3xl transition-all duration-300">
        <div className="mb-8 text-center">
          <div className="flex justify-center mb-4 relative">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-4 rounded-full shadow-lg animate-pulse">
              <Mic className="w-12 h-12 text-white" />
            </div>
            <div className="absolute -top-2 -right-2 bg-yellow-400 rounded-full p-2 animate-bounce">
              <Star className="w-4 h-4 text-white" />
            </div>
          </div>
          <h1 className="mb-2 text-gray-900 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Singing Competition 2026
          </h1>
          <p className="text-gray-600 mb-4">
            🎵 Register now to showcase your talent and compete for amazing prizes! 🏆
          </p>
          
          {/* Prize highlights */}
          <div className="flex justify-center gap-4 text-sm">
            <div className="flex items-center gap-1 text-purple-700">
              <Award className="w-4 h-4" />
              <span className="font-medium">$10,000</span>
            </div>
            <div className="flex items-center gap-1 text-pink-700">
              <Star className="w-4 h-4" />
              <span className="font-medium">Record Deal</span>
            </div>
            <div className="flex items-center gap-1 text-orange-700">
              <Users className="w-4 h-4" />
              <span className="font-medium">Live Audience</span>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="transform transition-all duration-200 hover:scale-[1.02]">
              <label htmlFor="firstName" className="block mb-2 text-gray-900">
                <User className="inline w-4 h-4 mr-2" />
                First Name *
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border-2 ${
                  errors.firstName ? 'border-red-500' : 'border-gray-300'
                } bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900 transition-all`}
                placeholder="John"
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                  <span>⚠️</span> {errors.firstName}
                </p>
              )}
            </div>

            <div className="transform transition-all duration-200 hover:scale-[1.02]">
              <label htmlFor="lastName" className="block mb-2 text-gray-900">
                Last Name *
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border-2 ${
                  errors.lastName ? 'border-red-500' : 'border-gray-300'
                } bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900 transition-all`}
                placeholder="Doe"
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                  <span>⚠️</span> {errors.lastName}
                </p>
              )}
            </div>
          </div>

          {/* Email */}
          <div className="transform transition-all duration-200 hover:scale-[1.02]">
            <label htmlFor="email" className="block mb-2 text-gray-900">
              <Mail className="inline w-4 h-4 mr-2" />
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg border-2 ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              } bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900 transition-all`}
              placeholder="john.doe@example.com"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                <span>⚠️</span> {errors.email}
              </p>
            )}
          </div>

          {/* Phone */}
          <div className="transform transition-all duration-200 hover:scale-[1.02]">
            <label htmlFor="phone" className="block mb-2 text-gray-900">
              <Phone className="inline w-4 h-4 mr-2" />
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg border-2 ${
                errors.phone ? 'border-red-500' : 'border-gray-300'
              } bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900 transition-all`}
              placeholder="+1 (555) 123-4567"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                <span>⚠️</span> {errors.phone}
              </p>
            )}
          </div>

          {/* Competition Category */}
          <div className="transform transition-all duration-200 hover:scale-[1.02]">
            <label htmlFor="category" className="block mb-2 text-gray-900">
              <Music className="inline w-4 h-4 mr-2" />
              Competition Category *
            </label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg border-2 ${
                errors.category ? 'border-red-500' : 'border-gray-300'
              } bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900 transition-all`}
            >
              <option value="">Choose a category...</option>
              <option value="solo-pop">🎤 Solo - Pop</option>
              <option value="solo-rock">🎸 Solo - Rock</option>
              <option value="solo-rnb">🎵 Solo - R&B/Soul</option>
              <option value="solo-classical">🎼 Solo - Classical</option>
              <option value="duet">👥 Duet</option>
              <option value="group">🎭 Group (3-6 members)</option>
            </select>
            {errors.category && (
              <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                <span>⚠️</span> {errors.category}
              </p>
            )}
          </div>

          {/* Song Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="transform transition-all duration-200 hover:scale-[1.02]">
              <label htmlFor="songTitle" className="block mb-2 text-gray-900">
                🎶 Song Title *
              </label>
              <input
                type="text"
                id="songTitle"
                name="songTitle"
                value={formData.songTitle}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border-2 ${
                  errors.songTitle ? 'border-red-500' : 'border-gray-300'
                } bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900 transition-all`}
                placeholder="Enter song title"
              />
              {errors.songTitle && (
                <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                  <span>⚠️</span> {errors.songTitle}
                </p>
              )}
            </div>

            <div className="transform transition-all duration-200 hover:scale-[1.02]">
              <label htmlFor="artistName" className="block mb-2 text-gray-900">
                🎙️ Original Artist (Optional)
              </label>
              <input
                type="text"
                id="artistName"
                name="artistName"
                value={formData.artistName}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900 transition-all"
                placeholder="Artist name"
              />
            </div>
          </div>

          {/* Performance Style */}
          <div className="transform transition-all duration-200 hover:scale-[1.02]">
            <label htmlFor="performanceStyle" className="block mb-2 text-gray-900">
              🎭 Performance Style *
            </label>
            <select
              id="performanceStyle"
              name="performanceStyle"
              value={formData.performanceStyle}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg border-2 ${
                errors.performanceStyle ? 'border-red-500' : 'border-gray-300'
              } bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900 transition-all`}
            >
              <option value="">Choose performance style...</option>
              <option value="acapella">🎵 A Cappella</option>
              <option value="instrumental">🎹 With Instrumental Track</option>
              <option value="live-band">🎸 Live Band Accompaniment</option>
              <option value="piano">🎹 Piano Accompaniment</option>
              <option value="guitar">🎸 Guitar Accompaniment</option>
            </select>
            {errors.performanceStyle && (
              <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                <span>⚠️</span> {errors.performanceStyle}
              </p>
            )}
          </div>

          {/* Number of Performers */}
          <div className="transform transition-all duration-200 hover:scale-[1.02]">
            <label htmlFor="numberOfAttendees" className="block mb-2 text-gray-900">
              <Users className="inline w-4 h-4 mr-2" />
              Number of Performers
            </label>
            <input
              type="number"
              id="numberOfAttendees"
              name="numberOfAttendees"
              min="1"
              max="6"
              value={formData.numberOfAttendees}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900 transition-all"
            />
          </div>

          {/* Special Requirements */}
          <div className="transform transition-all duration-200 hover:scale-[1.02]">
            <label htmlFor="specialRequirements" className="block mb-2 text-gray-900">
              💡 Special Requirements (Optional)
            </label>
            <textarea
              id="specialRequirements"
              name="specialRequirements"
              value={formData.specialRequirements}
              onChange={handleChange}
              rows={3}
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900 transition-all resize-none"
              placeholder="Any special technical requirements, accessibility needs, or other notes..."
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-4 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg hover:shadow-2xl transform hover:-translate-y-1 hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 group"
          >
            <span className="text-lg">Register for Competition</span>
            <Sparkles className="w-5 h-5 group-hover:animate-spin" />
          </button>
        </form>
      </div>
    </div>
  );
}