using System.Windows.Controls;

namespace SwiftlyApp.Views
{
    public partial class TweaksPage : Page
    {
        public TweaksPage()
        {
            InitializeComponent();
            DataContext = new ViewModels.TweaksViewModel();
        }
    }
}
